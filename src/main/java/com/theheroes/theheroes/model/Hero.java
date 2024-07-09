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
    private String image_url;
    private String description;
    private int year_of_creation;
    private String category;


    public Hero() {
    }

    
   


    public Hero(String name, String imageUrl, String description, int yearOfCreation, String category) {
        this.name = name;
        this.image_url = imageUrl;
        this.description = description;
        this.year_of_creation = yearOfCreation;
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
    public int getYear_of_creation() {
        return year_of_creation;
    }
    public void setYear_of_creation(int yearOfCreation) {
        this.year_of_creation = yearOfCreation;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    





    @Override
    public String toString() {
        return "Hero [id=" + id + ", name=" + name + ", imageUrl=" + image_url + ", description=" + description
                + ", yearOfCreation=" + year_of_creation + ", category=" + category + "]";
    }





    public String getImage_url() {
        return image_url;
    }





    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }
    

    


}
