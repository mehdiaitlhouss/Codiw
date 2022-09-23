package com.miola.codiw.smia;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface SemesterRepository extends MongoRepository<Semester, String>
{
    Optional<Semester> findSemesterByName(String semeterName);
}
