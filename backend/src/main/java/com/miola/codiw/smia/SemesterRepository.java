package com.miola.codiw.smia;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SemesterRepository extends MongoRepository<Semester, String>
{
    Semester findSemesterByName(String semeterName);
}
