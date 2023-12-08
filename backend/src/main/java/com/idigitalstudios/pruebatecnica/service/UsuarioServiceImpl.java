package com.idigitalstudios.pruebatecnica.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.idigitalstudios.pruebatecnica.model.Usuario;
import com.idigitalstudios.pruebatecnica.repository.UsuarioRepository;

import java.util.Optional;

@Service
public class UsuarioServiceImpl implements UsuarioService{
	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	public Usuario newUsuario(Usuario newUsuario) {
		/*if (usuarioRepository.existsByEmail(newUsuario.getEmail())) {
            throw new IllegalArgumentException("El correo electrónico ya está en uso");
        }
		
		if (usuarioRepository.existsByTel(newUsuario.getTel())) {
			throw new IllegalArgumentException("El telefono ya está en uso");
		}
		
		if (usuarioRepository.existsByUsername(newUsuario.getUsername())) {
			throw new IllegalArgumentException("El nombre de usuario ya está en uso");
		}*/
		// TODO Auto-generated method stub
		return usuarioRepository.save(newUsuario);
	}

	@Override
	public Iterable<Usuario> getAll() {
		// TODO Auto-generated method stub
		return this.usuarioRepository.findAll();
	}

	@Override
	public Usuario modifyUsuario(Usuario usuario) {
		// TODO Auto-generated method stub
		Optional<Usuario> optionalUsuario = this.usuarioRepository.findById(usuario.getId());
		
		if(optionalUsuario.isPresent()) {
			
			optionalUsuario.get().setNames(usuario.getNames());
			optionalUsuario.get().setLastnames(usuario.getLastnames());
			optionalUsuario.get().setUsername(usuario.getUsername());
			optionalUsuario.get().setEmail(usuario.getEmail());
			optionalUsuario.get().setTel(usuario.getTel());
			optionalUsuario.get().setAddress(usuario.getAddress());
			
			return this.newUsuario(optionalUsuario.get());
		}else {
			return null;
		}
		
	}
	@Override
	public void deleteUsuario(Long id) {
		this.usuarioRepository.deleteById(id);
	}
}
