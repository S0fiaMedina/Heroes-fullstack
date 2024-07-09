package com.theheroes.theheroes.infrastructure;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.theheroes.theheroes.application.HeroService;
import com.theheroes.theheroes.model.Hero;

import jakarta.annotation.PostConstruct;

@RequestMapping("/")
@Controller
public class HeroeController {

  @Autowired
  private HeroService heroService;

  private List<Hero> heroes;

  @PostConstruct
  public void init() {
    heroService.prueba3cartas();
    heroes = heroService.getAllHeroes();

  }

  @GetMapping("/")
  public String index(Model model) {
    model.addAttribute("heroList", heroes);
    model.addAttribute("hero", new Hero());
    return "index";
  }

  @PostMapping("/add")
  public String addNewHero(Hero hero) {
    heroService.saveHero(hero);
    return "redirect:/";
  }

  @GetMapping("/heroe/{id}")
  public Hero getAllHeroes(@RequestParam Long id){
    return heroService.getHero(id);
  }
  
}
