package com.theheroes.theheroes.model;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;



public interface HeroRepository extends JpaRepository<Hero, Long>, HeroRepositoryPort {


}