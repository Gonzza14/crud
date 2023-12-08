package com.idigitalstudios.pruebatecnica.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.idigitalstudios.pruebatecnica.model.Usuario;
import com.idigitalstudios.pruebatecnica.service.UsuarioService;

@RestController
@RequestMapping("usuario")
@CrossOrigin(origins = {"http://localhost:4200"})
public class UsuarioController {
	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping("/new")
	public ResponseEntity<?> newUsuario(@RequestBody Usuario newUsuario) {
		 try {
	            Usuario nuevoUsuario = usuarioService.newUsuario(newUsuario);
	            return new ResponseEntity<>(nuevoUsuario, HttpStatus.CREATED);
	        } catch (IllegalArgumentException e) {
	            return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
	        }
	}
	
	@GetMapping("/show")
	public Iterable<Usuario> getAll(){
		return usuarioService.getAll();
	}
	
	@PostMapping("/update")
	public Usuario updateUsuario(@RequestBody Usuario usuario) {
		return this.usuarioService.modifyUsuario(usuario);
	}
	
	@PostMapping(value = "/delete/{id}")
	public void deleteUsuario(@PathVariable(value="id") Long id) {
		this.usuarioService.deleteUsuario(id);
	}
}
