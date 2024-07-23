package com.genesis.repositories;

import com.genesis.entities.Tasa;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Denis Morales <alfonso200925014@gmail.com>
 */
public interface tasaCambioRepository extends JpaRepository<Tasa, Integer> {
    
}
