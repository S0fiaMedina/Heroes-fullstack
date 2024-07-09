package com.theheroes.theheroes.model;

import org.springframework.data.jpa.repository.JpaRepository;

import com.theheroes.theheroes.application.HeroRepositoryPort;

public interface HeroRepository extends JpaRepository<Hero, Long>, HeroRepositoryPort {

}
