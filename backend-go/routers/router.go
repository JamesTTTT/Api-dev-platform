package routers

import (
	"backend-go/controllers"
	"backend-go/middleware"
	"github.com/gin-gonic/gin"
	"net/http"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()
	r.Use(middleware.CORSMiddleware())

	r.POST("/api/request", controllers.HandleRequest)

	// AUTH
	auth := r.Group("/api/auth")
	{
		auth.POST("/signup", controllers.CreateUser)
		auth.POST("/login", controllers.Login)
		auth.GET("/profile", middleware.CheckAuth, controllers.GetUserProfile)
	}

	// TEST
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	return r
}
