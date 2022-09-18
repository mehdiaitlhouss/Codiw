package com.miola.codiw.smia;

import lombok.*;

import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Matiere
{
    private String img;
    private String name;
    private Map<String, Contenu> contenus = new HashMap<>();
}
