package com.miola.codiw.smia;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Contenu
{
    private String img;
    private String name;
    private List<Ressource> ressources = new ArrayList<>();
}
