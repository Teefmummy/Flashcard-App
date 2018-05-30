# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Deck.destroy_all
# Card.destroy_all
# User.destroy_all
# Favorite.destroy_all
# Usercard.destroy_all

# decks = Deck.create([{name: 'Deck A'},{name: 'Deck B'},{name: 'Deck C'}])
# cards = Card.create([{q_value: 'What is a man?', a_value: 'A Miserable Pile of Secrets', deck_id: 10},{q_value: 'To Be or not to be?', a_value: 'is that a question?', deck_id: 10}])
# users = User.create([{name: 'user1', hash_password: 'abc123', level: 1, title: 'Garbage Man'},{name: 'user2', hash_password: 'abc123', level: 1, title: 'Garbage Man'}])
# favorites = Favorite.create([{user_id: 1, deck_id: 13}, {user_id: 1, deck_id: 13}])
# usercards = Usercard.create([{user_id: 1, card_id: 3, score: 3}])

user = User.new
user.email = 'a@b.com'
user.password = '123'
user.password_confirmation = '123'
user.save

