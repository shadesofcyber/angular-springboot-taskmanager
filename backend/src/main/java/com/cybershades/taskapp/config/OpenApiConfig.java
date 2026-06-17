package com.cybershades.taskapp.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI taskAppOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Task App API")
                        .description("REST API für Task Management, mit Priority und Status.")
                        .version("1.0.0"));
    }
}