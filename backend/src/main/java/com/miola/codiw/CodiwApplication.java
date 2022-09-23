package com.miola.codiw;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;
import java.util.List;

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

	@Bean
	public CorsFilter croCorsFilter() {
		CorsConfiguration corsConfiguration = new CorsConfiguration();
		corsConfiguration.setAllowCredentials(true);
		corsConfiguration.setAllowedOrigins(List.of("http://localhost:4200"));
		corsConfiguration.setAllowedHeaders(Arrays.asList(
				"Origin",
				"Access-Control-Allow-Origin",
				"Content-Type",
				"Accept",
				"Authorization",
				"Origin, Accept",
				"X-Requested-With",
				"Access-Control-Request-Method",
				"Access-Control-Request-Headers"));
		corsConfiguration.setExposedHeaders(Arrays.asList(
				"Origin",
				"Content-Type",
				"Accept",
				"Authorization",
				"Access-Control-Allow-Origin",
				"Access-Control-Allow-Origin",
				"Access-Control-Request-Headers",
				"Access-Control-Allow-Credentials"));
		corsConfiguration.setAllowedMethods(Arrays.asList(
				"GET",
				"POST",
				"PUT",
				"DELETE",
				"OPTIONS"));
		UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
		urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);
		return new CorsFilter(urlBasedCorsConfigurationSource);
	}

	@Override
	public void run(String... args) throws Exception
	{
	}
}
