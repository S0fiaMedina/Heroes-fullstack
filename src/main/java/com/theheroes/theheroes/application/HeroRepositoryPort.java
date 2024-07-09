package com.theheroes.theheroes.application;

import java.util.List;
import java.util.Optional;

import com.theheroes.theheroes.model.Hero;

public interface HeroRepositoryPort {
    Hero save(Hero hero);
    Optional<Hero> findById(Long id);
    List<Hero> findAll();
}
