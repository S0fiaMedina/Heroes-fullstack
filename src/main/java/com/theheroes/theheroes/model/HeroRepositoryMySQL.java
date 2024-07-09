package com.theheroes.theheroes.model;



import org.springframework.data.jpa.repository.JpaRepository;






public interface HeroRepositoryMySQL extends JpaRepository<Hero, Long>{
}
