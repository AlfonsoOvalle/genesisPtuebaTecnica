package com.genesis.config;

import com.genesis.cliente.SoapCliente;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.oxm.jaxb.Jaxb2Marshaller;

/**
 *
 * @author Denis Morales <alfonso200925014@gmail.com>
 */
@Configuration
public class SoapConfig {

    @Bean
    public Jaxb2Marshaller marshaller() {
        Jaxb2Marshaller marshaller = new Jaxb2Marshaller();
        marshaller.setContextPath("com.genesis.wsdl");
        return marshaller;
    }

    @Bean
    public SoapCliente obtenerClienteSoap(Jaxb2Marshaller marshaller) {
        SoapCliente soapClient = new SoapCliente();

        soapClient.setDefaultUri("https://www.banguat.gob.gt/variables/ws/TipoCambio.asmx");
        soapClient.setMarshaller(marshaller);
        soapClient.setUnmarshaller(marshaller);
        return soapClient;
    }
}
