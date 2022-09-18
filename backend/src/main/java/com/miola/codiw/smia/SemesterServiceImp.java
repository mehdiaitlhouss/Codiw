package com.miola.codiw.smia;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SemesterServiceImp implements ISemesterService
{
    private final SemesterRepository semesterRepository;

    public SemesterServiceImp(SemesterRepository semesterRepository) {this.semesterRepository = semesterRepository;}

    @Override
    public Semester addSemester(Semester semester)
    {
        return semesterRepository.insert(semester);
    }

    @Override
    public List<Semester> getAllSemesters()
    {
        return semesterRepository.findAll();
    }

    @Override
    public List<Matiere> getAllMatieres(String semesterName)
    {
        return semesterRepository.findSemesterByName(semesterName)
                .getMatieres()
                .values()
                .stream()
                .toList();
    }

    @Override
    public List<Contenu> getAllContenus(String semesterName, String matiereName)
    {
        return semesterRepository.findSemesterByName(semesterName)
                .getMatieres()
                .get(matiereName)
                .getContenus()
                .values()
                .stream()
                .toList();
    }

    @Override
    public List<Ressource> getAllRessources(String semesterName, String matiereName, String ressourceName)
    {
        return semesterRepository.findSemesterByName(semesterName)
                .getMatieres()
                .get(matiereName)
                .getContenus()
                .get(ressourceName)
                .getRessources();
    }
}
