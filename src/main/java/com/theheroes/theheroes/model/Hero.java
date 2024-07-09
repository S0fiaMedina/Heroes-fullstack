package com.theheroes.theheroes.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "hero")
public class Hero {
    
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String imageUrl;
    private String description;
    private int yearOfCreation;
    private String category;


    public Hero() {
    }

    
    public Hero(String name, String imageUrl, String description, int yearOfCreation, String category) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.yearOfCreation = yearOfCreation;
        this.category = category;
    }


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public int getYearOfCreation() {
        return yearOfCreation;
    }
    public void setYearOfCreation(int yearOfCreation) {
        this.yearOfCreation = yearOfCreation;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    

    


}
