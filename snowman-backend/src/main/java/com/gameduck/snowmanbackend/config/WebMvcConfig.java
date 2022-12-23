package com.gameduck.snowmanbackend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

	private final long MAX_AGE_SECS = 3600;

	/*@Value("${app.cors.allowedOrigins}")
	private String[] allowedOrigins;*/

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
			.allowedOrigins("https://web-snowmangarden-20z52flc0kez0t.gksl2.cloudtype.app")
			.allowedMethods("HEAD", "OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE")
			.maxAge(MAX_AGE_SECS);
	}
}