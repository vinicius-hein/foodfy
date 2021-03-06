const express = require('express')
const routes = express.Router()
const foodfy = require('./app/controllers/FoodfyController')
const recipes = require('./app/controllers/RecipesController')
const chefs = require('./app/controllers/ChefsController')

// Rotas da página
routes.get('/', foodfy.index)
routes.get('/about-foodfy', foodfy.about)
routes.get('/recipes', foodfy.recipes)
routes.get('/recipes/:id', foodfy.recipeDetails)


// Rotas admin
// Rotas recipes
routes.get('/admin/recipes', recipes.index)
routes.get('/admin/recipes/create', recipes.create)
routes.get('/admin/recipes/:id', recipes.show)
routes.get('/admin/recipes/:id/edit', recipes.edit)

routes.post('/admin/recipes', recipes.post)
routes.put('/admin/recipes/', recipes.put)
routes.delete('/admin/recipes', recipes.delete)

// Rotas chefs
routes.get('/admin/chefs', chefs.index)
routes.get('/admin/chefs/create', chefs.create)
routes.get('/admin/chefs/:id', chefs.show)
routes.get('/admin/chefs/:id/edit', chefs.edit)

routes.post('/admin/chefs', chefs.post)
routes.put('/admin/chefs/', chefs.put)
routes.delete('/admin/chefs', chefs.delete)


module.exports = routes