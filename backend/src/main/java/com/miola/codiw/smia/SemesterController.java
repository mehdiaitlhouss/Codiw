package com.miola.codiw.smia;

import com.miola.codiw.smia.dto.ContenuDto;
import com.miola.codiw.smia.dto.MatiereDto;
import com.miola.codiw.smia.dto.SemesterDto;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Type;
import java.util.List;

@RestController
@RequestMapping("/api/v1/smia")
public class SemesterController
{
    private final SemesterServiceImp semesterService;
    private final ModelMapper modelMapper;

    public SemesterController(SemesterServiceImp semesterService, ModelMapper modelMapper) {
        this.semesterService = semesterService;
        this.modelMapper = modelMapper;
    }

    @PostMapping("/add")
    public ResponseEntity<Semester> addSemester(@RequestBody Semester semester){
        return new ResponseEntity<>(semesterService.addSemester(semester), HttpStatus.CREATED);
    }

    @GetMapping()
    public List<SemesterDto> getAllSemesters(){
        Type listType = new TypeToken<List<SemesterDto>>() {}.getType();
        return modelMapper.map(semesterService.getAllSemesters(), listType);
    }

    @GetMapping("/{semesterName}")
    public List<MatiereDto> getSemester(@PathVariable String semesterName){
        Type listType = new TypeToken<List<MatiereDto>>() {}.getType();
        return modelMapper.map(semesterService.getAllMatieres(semesterName), listType);
    }

    @GetMapping("/{semesterName}/{matiereName}")
    public List<ContenuDto> getMatiere(@PathVariable String semesterName, @PathVariable String matiereName){
        Type listType = new TypeToken<List<ContenuDto>>() {}.getType();
        return modelMapper.map(semesterService.getAllContenus(semesterName, matiereName), listType);
    }

    @GetMapping("/{semesterName}/{matiereName}/{ressourceName}")
    public List<Ressource> getCours(@PathVariable String semesterName, @PathVariable String matiereName, @PathVariable String ressourceName){
        return semesterService.getAllRessources(semesterName, matiereName, ressourceName);
    }
}
