package com.miola.codiw.post;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "posts")
public class Post
{
    @Id
    private String id;
    @Indexed(unique = true)
    private String name;
    private String content;
    private Date date;
}
