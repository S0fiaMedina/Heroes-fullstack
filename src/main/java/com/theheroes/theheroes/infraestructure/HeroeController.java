package com.theheroes.theheroes.infraestructure;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.theheroes.theheroes.application.HeroService;
import com.theheroes.theheroes.model.Hero;

import jakarta.annotation.PostConstruct;

@RequestMapping("/")
@Controller
public class HeroeController {

  @Autowired
  private HeroService heroeService;

  private static ArrayList<Hero> heroes;

  @PostConstruct
  public void init() {
    heroes = heroeService.getAllHeroes();
  }

  @GetMapping("/")
  public String index(Model model) {
    model.addAttribute("heroList", heroes);
    model.addAttribute("hero", new Hero());
    return "index";
  }

  @PostMapping("/add")
  public String addNewHero(Hero hero) {
    heroeService.saveHero(hero);
    return "redirect:/";
  }
}
