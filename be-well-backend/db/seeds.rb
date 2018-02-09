# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "Connie", phone_number: 1234567890, email: "connie@connie.com", password: "hello")

CognitiveDistortion.create(title: "All-or-Nothing Thinking", description: "You see things in black-or-white categories. If a situation falls short of perfect, you see it as a total failure.")
CognitiveDistortion.create(title: "Over generalization", description: "You see a single negative event, such as a romantic rejection or a career reversal, as a never-ending pattern of defeat by using words such as “always” or “never” when you think about it.")
CognitiveDistortion.create(title: "Mental Filter", description: " You pick out a single negative detail and dwell on it exclusively, so that your vision of all reality becomes darkened.")
CognitiveDistortion.create(title: "Discounting the Positive", description: "You reject positive experiences by insisting they 'don't count.' If you do a good job, you may tell yourself that it wasn’t good enough or that anyone could have done as well. Discounting the positive takes the joy out of life and makes you feel inadequate and unrewarded.")
CognitiveDistortion.create(title: "Mind Reading", description: "Without checking it out, you arbitrarily conclude that someone is reacting negatively to you.")
CognitiveDistortion.create(title: "Fortune-telling", description: "You predict that things will turn out badly.")
CognitiveDistortion.create(title: "Magnification", description: " You exaggerate the importance of your problems and shortcomings, or you minimize the importance of your desirable qualities. This is also called the “binocular trick.")
CognitiveDistortion.create(title: "Emotional Reasoning", description: "You assume that your negative emotions necessarily reflect the way things really are: 'I feel guilty. I must be a terrible person.'")


DailyUpdate.create(energy_level: 5, mood_desc: "slightly stressed", mood_num: 6, day_desc: "start this project nao", grateful1: "surviving", grateful2: "sleep", grateful3: "people", sleep: 6, user_id: 1)


ThoughtEntry.create(current_mood: 4, emotions: "tired, sleepy, stressed", title: "asdfasdf", situation: "starting this project", negative_thoughts: "avoidance of stress", outcome: "^_^", user_id: 1)

EntryDistortionJoin.create(cognitive_distortion_id: 1, thought_entry_id: 1)

Goal.create(title: "employment", action1: "finishing this bootcamp", action2: "sleeping", action3: "hauling ass", attainable: "$$$", relevance: "pls", target_date: "March 1, 2018", user_id: 1)

Meditation.create(name: "Breathing Meditation", description: "fill in later", length: "5:31", audio_url: "https://s3.us-east-2.amazonaws.com/meditation-services-be-well/01_Breathing_Meditation.mp3")
Meditation.create(name: "Breath Sound Body Meditation", description: "fill in later", length: "12:00", audio_url: "https://s3.us-east-2.amazonaws.com/meditation-services-be-well/02_Breath_Sound_Body_Meditation.mp3")
Meditation.create(name: "Complete Meditation Instructions", description: "fill in later", length: "19:00", audio_url: "https://s3.us-east-2.amazonaws.com/meditation-services-be-well/03_Complete_Meditation_Instructions.mp3")
Meditation.create(name: "Meditation for Working with Difficulties", description: "fill in later", length: "6:55", audio_url: "https://s3.us-east-2.amazonaws.com/meditation-services-be-well/04_Meditation_for_Working_with_Difficulties.mp3")
Meditation.create(name: "Loving Kindness Meditation", description: "fill in later", length: "9:31", audio_url: "https://s3.us-east-2.amazonaws.com/meditation-services-be-well/05_Loving_Kindness_Meditation.mp3")
Meditation.create(name: "Body and Sound Meditation", description: "fill in later", length: "3:06", audio_url: "https://s3.us-east-2.amazonaws.com/meditation-services-be-well/Body-Sound-Meditation.mp3")
Meditation.create(name: "Body Scan Meditation", description: "fill in later", length: "2:44", audio_url: "https://s3.us-east-2.amazonaws.com/meditation-services-be-well/Body-Scan-Meditation.mp3")
Meditation.create(name: "Body Scan for Sleep", description: "fill in later", length: "13:50", audio_url: "https://s3.us-east-2.amazonaws.com/meditation-services-be-well/Body-Scan-for-Sleep.mp3")
