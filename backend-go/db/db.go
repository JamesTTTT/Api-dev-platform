package db

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"log"
)

var DB *gorm.DB

func Init() {
	var err error
	DB, err = gorm.Open(sqlite.Open("api-tester.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database")
	}
}
