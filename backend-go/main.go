package main

import (
	"backend-go/db"
	"backend-go/models"
	"backend-go/routers"
)

func main() {
	db.Init()
	db.DB.AutoMigrate(&models.User{})

	r := routers.SetupRouter()

	r.Run(":8080")
}
