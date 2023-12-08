package com.idigitalstudios.pruebatecnica.service;

import com.idigitalstudios.pruebatecnica.model.Usuario;

public interface UsuarioService {
	Usuario newUsuario(Usuario newUsuario);
	Iterable<Usuario> getAll();
	Usuario modifyUsuario(Usuario usuario);
	void deleteUsuario(Long id);
}
