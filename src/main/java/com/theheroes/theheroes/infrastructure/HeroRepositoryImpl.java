package com.theheroes.theheroes.infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.theheroes.theheroes.application.HeroRepositoryPort;
import com.theheroes.theheroes.model.Hero;

@Repository
public interface HeroRepositoryImpl  extends JpaRepository<Hero ,Long>, HeroRepositoryPort{

}
