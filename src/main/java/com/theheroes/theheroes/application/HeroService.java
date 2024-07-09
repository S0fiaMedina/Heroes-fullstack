package com.theheroes.theheroes.application;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.theheroes.theheroes.model.Hero;

@Service
public class HeroService {

  @Autowired
  private HeroRepositoryPort heroRepositoryPort;


  public HeroService(){

  }

  public void saveHero(Hero hero) {
    this.heroRepositoryPort.save(hero);
  }

  public List<Hero> getAllHeroes() {
    return this.heroRepositoryPort.findAll();
  }

  public Hero getHero(Long id){
    return heroRepositoryPort.findById(id).orElse(null);
  }

  public void prueba3cartas(){
    Hero heroe1 = new Hero("The Wasp", "https://cdn.marvel.com/content/1x/321whv_ons_crd_02.jpg", "The Wasp is a fictional superhero appearing in American comic books published by Marvel Comics.", 1960, "Marvel");
    saveHero(heroe1);
    // return "index";
  }
}