package com.miola.codiw.smia;


import java.util.List;

public interface ISemesterService
{
    Semester addSemester(Semester semester);
    List<Semester> getAllSemesters();
    List<Matiere> getAllMatieres(String semesterName);
    List<Contenu> getAllContenus(String semesterName, String matiereName);
    List<Ressource> getAllRessources(String semesterName, String matiereName, String ressourceName);
}
