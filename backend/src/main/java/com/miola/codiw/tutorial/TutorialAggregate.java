package com.miola.codiw.tutorial;


import org.springframework.data.annotation.Id;

import java.util.List;

public class TutorialAggregate
{
    private @Id String category;
    private List<TutorialExtract> tutorials;

    public String getCategory() {
        return category;
    }

    public List<TutorialExtract> getTutorials() {
        return tutorials;
    }
}
