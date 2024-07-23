package com.genesis;

import com.genesis.cliente.SoapCliente;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication(scanBasePackages = "com.genesis")

public class BasicApplication {

    public static void main(String[] args) {
        SpringApplication.run(BasicApplication.class, args);

    }

    @Bean
    CommandLineRunner init(SoapCliente soapCliente) {
        return args -> {
            
        };
    }
}
