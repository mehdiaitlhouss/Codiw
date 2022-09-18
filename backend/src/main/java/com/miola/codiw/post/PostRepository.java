package com.miola.codiw.post;

import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends MongoRepository<Post, String>
{
    public List<Post> findByName(String name);
    public List<LigthPost> findByOrderByDateDesc();

    @Query(value="{}", fields="{_id : 1, name : 1}", sort = "{ date : -1 }")
    List<Post> findIdAndNameExcludeOthers();

    @Aggregation("{ '$project': { '_id' : '$name' } }")
    public List<String> findAllName();

    @Aggregation("{ $group: { _id : $date, names : { $addToSet : $name } } }")
    public List<PostAggregate> groupByDate();
}
