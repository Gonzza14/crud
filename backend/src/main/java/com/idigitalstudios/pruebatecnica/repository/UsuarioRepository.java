package com.idigitalstudios.pruebatecnica.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.idigitalstudios.pruebatecnica.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	Optional<Usuario> findByUsername(String username);
	
	 boolean existsByEmail(String email);
	 boolean existsByUsername(String username);
	 boolean existsByTel(String tel);
}
