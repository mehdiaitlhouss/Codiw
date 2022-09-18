package com.miola.codiw.post;

import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.List;

public class PostAggregate
{
    private @Id Date date;
    private List<String> names;

    public Date getDate() {
        return date;
    }

    public List<String> getNames() {
        return names;
    }
}
