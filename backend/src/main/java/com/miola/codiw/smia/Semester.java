package com.miola.codiw.smia;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "smia")
public class Semester
{
    @Id
    private String id;
    @Indexed(unique = true)
    private String name;
    private String img;
    private Map<String, Matiere> matieres = new HashMap<>();
}
