package com.miola.codiw.tutorial;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "tutorials")
public class Tutorial
{
    @Id
    private String id;
    @Indexed(unique = true)
    private String name;
    private String shortDescription;
    private String content;
    private String category;
}
