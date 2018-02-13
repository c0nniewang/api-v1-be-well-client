# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180213193000) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cognitive_distortions", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "daily_updates", force: :cascade do |t|
    t.integer "energy_level"
    t.string "mood_desc"
    t.integer "mood_num"
    t.string "day_desc"
    t.string "grateful1"
    t.string "grateful2"
    t.string "grateful3"
    t.integer "sleep"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "entry_distortion_joins", force: :cascade do |t|
    t.integer "thought_entry_id"
    t.integer "cognitive_distortion_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favorite_meditations", force: :cascade do |t|
    t.integer "user_id"
    t.integer "meditation_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "goal_reflections", force: :cascade do |t|
    t.integer "goal_id"
    t.string "success"
    t.string "emotions"
    t.integer "mood_num"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "goals", force: :cascade do |t|
    t.string "title"
    t.string "action1"
    t.string "action2"
    t.string "action3"
    t.string "attainable"
    t.string "relevance"
    t.date "target_date"
    t.integer "user_id"
    t.boolean "completed", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "date_completed"
  end

  create_table "meditation_sessions", force: :cascade do |t|
    t.integer "user_id"
    t.integer "meditation_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "streak"
  end

  create_table "meditations", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "length"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "audio_url"
  end

  create_table "thought_entries", force: :cascade do |t|
    t.string "title"
    t.integer "current_mood"
    t.string "emotions"
    t.string "situation"
    t.string "negative_thoughts"
    t.string "outcome"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "phone_number"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
