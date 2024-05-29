package controllers

import (
	"bytes"
	"github.com/gin-gonic/gin"
	"io"
	"net/http"
	"time"
)

type Request struct {
	URL     string
	Method  string
	Headers map[string]string
	Body    string
}

func HandleRequest(c *gin.Context) {
	var req Request
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	client := &http.Client{Timeout: 10 * time.Second}

	request, err := http.NewRequest(req.Method, req.URL, bytes.NewBuffer([]byte(req.Body)))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"Error": err.Error()})
		return
	}

	for key, value := range req.Headers {
		request.Header.Set(key, value)
	}

	response, err := client.Do(request)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer response.Body.Close()

	responseBody, err := io.ReadAll(response.Body)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  response.Status,
		"headers": response.Header,
		"body":    string(responseBody),
	})
}
