package com.example.proyectoIntegrador.service.implementacion;

import com.example.proyectoIntegrador.entity.Imagen;
import com.example.proyectoIntegrador.repository.ImagenRepository;
import com.example.proyectoIntegrador.service.IGeneralService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ImagenService implements IGeneralService<Imagen, Long> {


    @Autowired
    private ImagenRepository imagenRepository;
    @Autowired
    private ObjectMapper mapper;

    @Override
    public Imagen agregar(Imagen imagen)  {
        return null;
    }

    @Override
    public Imagen buscar(Long aLong) {
        return null;
    }

    @Override
    public Imagen editar(Imagen imagen) {
        return null;
    }

    @Override
    public List<Imagen> listarTodos() {
        return null;
    }

    @Override
    public void eliminar(Long aLong)  {

    }
}