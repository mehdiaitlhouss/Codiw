package com.miola.codiw;

import com.miola.codiw.smia.Semester;
import com.miola.codiw.smia.SemesterRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Example;

import java.util.Calendar;
import java.util.Date;
import java.util.Optional;

@SpringBootApplication
public class CodiwApplication implements CommandLineRunner
{
	private final Logger logger = LoggerFactory.getLogger(CodiwApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(CodiwApplication.class, args);
	}

	@Bean
	public ModelMapper medelMapper(){
		return new ModelMapper();
	}

	@Override
	public void run(String... args) throws Exception
	{
	}
}
