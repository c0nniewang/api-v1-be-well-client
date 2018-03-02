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
CognitiveDistortion.create(title: "Discounting the Positive", description: "You reject positive experiences by insisting they "don't count." If you do a good job, you may tell yourself that it wasn’t good enough or that anyone could have done as well. Discounting the positive takes the joy out of life and makes you feel inadequate and unrewarded.")
CognitiveDistortion.create(title: "Mind Reading", description: "Without checking it out, you arbitrarily conclude that someone is reacting negatively to you.")
CognitiveDistortion.create(title: "Fortune-telling", description: "You predict that things will turn out badly.")
CognitiveDistortion.create(title: "Magnification", description: "You exaggerate the importance of your problems and shortcomings, or you minimize the importance of your desirable qualities. This is also called the binocular trick.")
CognitiveDistortion.create(title: "Emotional Reasoning", description: "You assume that your negative emotions necessarily reflect the way things really are: I feel guilty. I must be a terrible person."")
CognitiveDistortion.create(title: "Should Statements", description: "You tell yourself that things should be the way you hoped or expected them to be.  “Musts,” “oughts” and “have tos” are similar offenders. “Should statements” that are directed against yourself lead to guilt and frustration. Should statements that are directed against other people or the world in general lead to anger and frustration.")
CognitiveDistortion.create(title: "Labeling", description: "Labeling is an extreme form of all-or-nothing thinking. Instead of saying “I made a mistake,” you attach a negative label to yourself. You may also label others. Then you feel that the problem is with that person’s “character” or “essence” instead of with their thinking or behavior.")
CognitiveDistortion.create(title: "Personalization and Blame", description: "Personalization occurs when you hold yourself personally responsible for an event that isn’t entirely under your control. Personalization leads to guilt, shame, and feelings of inadequacy. Some people do the opposite. They blame other people or their circumstances for their problems, and they overlook ways that they might be contributing to the problem.")

Meditation.create(name: "Breathing Meditation", description: "This is a brief meditation session focused on centering your breath and presence.", length: "5:31", audio_url: "https://s3.us-east-2.amazonaws.com/meditation-services-be-well/01_Breathing_Meditation.mp3")
Meditation.create(name: "Breath Sound Body Meditation", description: "This meditation session focuses on the awareness of external sounds, your inner thoughts, and finally, your physical state.", length: "12:00", audio_url: "https://s3.us-east-2.amazonaws.com/meditation-services-be-well/02_Breath_Sound_Body_Meditation.mp3")
Meditation.create(name: "Complete Meditation Instructions", description: "This is a complete guided meditation session, taking you through breathing exercises to identifying your thoughts and guiding them to a peaceful state.", length: "19:00", audio_url: "https://s3.us-east-2.amazonaws.com/meditation-services-be-well/03_Complete_Meditation_Instructions.mp3")
Meditation.create(name: "Meditation for Working with Difficulties", description: "If you are experiencing any difficult emotions or situations, this meditation session will help you walk through your thoughts and untangle the negativity from your physical state.", length: "6:55", audio_url: "https://s3.us-east-2.amazonaws.com/meditation-services-be-well/04_Meditation_for_Working_with_Difficulties.mp3")
Meditation.create(name: "Loving Kindness Meditation", description: "This meditation session is centered around warm, positive thoughts that can be applied to all facets of life.", length: "9:31", audio_url: "https://s3.us-east-2.amazonaws.com/meditation-services-be-well/05_Loving_Kindness_Meditation.mp3")
Meditation.create(name: "Body and Sound Meditation", description: "This is a short session perfect for any time of day to bring yourself back to a calm and centered state by focusing on your body.", length: "3:06", audio_url: "https://s3.us-east-2.amazonaws.com/meditation-services-be-well/Body-Sound-Meditation.mp3")
Meditation.create(name: "Body Scan Meditation", description: "This is a quick body scan that will bring mindfulness and awareness to your physical state.", length: "2:44", audio_url: "https://s3.us-east-2.amazonaws.com/meditation-services-be-well/Body-Scan-Meditation.mp3")
Meditation.create(name: "Body Scan for Sleep", description: "This is a guided body scan meditation to help you prepare for sleep. You may find yourself drifting off to sleep as you do the meditation. You can allow the meditation to turn off on its own.", length: "13:50", audio_url: "https://s3.us-east-2.amazonaws.com/meditation-services-be-well/Body-Scan-for-Sleep.mp3")


# fake user data 
DailyUpdate.create(energy_level: 5, mood_desc: "slightly stressed", mood_num: 6, day_desc: "I started my final project for Flatiron today. Came up with a couple ideas but decided to go with a wellness app.", grateful1: "Tim <3", grateful2: "web103017 cohort!", grateful3: "noodles", sleep: 6, user_id: 1, created_at: "Fri, 09 Feb 2018 18:32:02 UTC +00:00")

DailyUpdate.create(energy_level: 7, mood_desc: "tired, sleepy", mood_num: 7, day_desc: "Stayed in and did some productive netflix & chill", grateful1: "weekend days", grateful2: "sleeping in", grateful3: "lazy mornings", sleep: 8, user_id: 1, created_at: "Sat, 10 Feb 2018 18:32:02 UTC +00:00")

DailyUpdate.create(energy_level: 8, mood_desc: "sunday scaries", mood_num: 9, day_desc: "sunday mornings~", grateful1: "brunching", grateful2: "peking duck", grateful3: "friends", sleep: 6, user_id: 1, created_at: "Sun, 11 Feb 2018 18:32:02 UTC +00:00")

DailyUpdate.create(energy_level: 9, mood_desc: "motivated, excited, nervous", mood_num: 9, day_desc: "gearing up for module 5 projects", grateful1: "BBHMM", grateful2: "slightly inappropriate cohort catchphrases", grateful3: "korean skincare", sleep: 7, user_id: 1, created_at: "Thu, 08 Feb 2018 18:32:02 UTC +00:00")

DailyUpdate.create(energy_level: 5, mood_desc: "mondaze are so rough", mood_num: 6, day_desc: "grinding away on this project and trying to get to the finish end", grateful1: "lunar new year", grateful2: "feasting", grateful3: "dumplings", sleep: 6, user_id: 1, created_at: "Mon, 12 Feb 2018 18:32:02 UTC +00:00")

DailyUpdate.create(energy_level: 6, mood_desc: "frustrated, tired", mood_num: 4, day_desc: "woke up in the middle of the night but making some good progress on my final project", grateful1: "coffee", grateful2: "Modern Family", grateful3: "popcorn", sleep: 6, user_id: 1, created_at: "Tue, 13 Feb 2018 18:32:02 UTC +00:00")

DailyUpdate.create(energy_level: 7, mood_desc: "annoyed, tired", mood_num: 5, day_desc: "working on last minute details, styling is seriously the worst", grateful1: "color palettes", grateful2: "Illustrator magic", grateful3: "eggs", sleep: 6, user_id: 1, created_at: "Wed, 14 Feb 2018 18:32:02 UTC +00:00")

ThoughtEntry.create(current_mood: 3, emotions: "tired, sleepy, stressed", title: "Getting ready to start this final project", situation: "I'm a little anxious about finishing up this bootcamp and worried about the quality of my final project.", negative_thoughts: "My first thought was to discredit my own project ideas as subpar", outcome: "I'm walking back my thoughts and trying to trust in the process.", user_id: 1, created_at: "Mon, 12 Feb 2018 18:32:02 UTC +00:00")

ThoughtEntry.create(current_mood: 8, emotions: "happy, cozy", title: "I <3 Japanese Cuisine", situation: "Just came back from a dinner at Kajitsu and it was absolutely incredible! So grateful for this experience.", negative_thoughts: "Some guilt over being so happy", outcome: "I'm working on putting these negative feelings away and moving on.", user_id: 1, created_at: "Thu, 08 Feb 2018 18:32:00 UTC +00:00")



EntryDistortionJoin.create(cognitive_distortion_id: 4, thought_entry_id: 1)
EntryDistortionJoin.create(cognitive_distortion_id: 7, thought_entry_id: 1)
EntryDistortionJoin.create(cognitive_distortion_id: 4, thought_entry_id: 2)
EntryDistortionJoin.create(cognitive_distortion_id: 11, thought_entry_id: 2)



Goal.create(title: "employment", action1: "finishing this bootcamp", action2: "sleeping", action3: "hauling ass", attainable: "$$$", relevance: "pls", target_date: "March 1, 2018", user_id: 1)


MeditationSession.create(user_id: 1, meditation_id: 1, created_at: "2018-02-12 15:01:33")
MeditationSession.create(user_id: 1, meditation_id: 7, created_at: "2018-02-13 15:01:33")
MeditationSession.create(user_id: 1, meditation_id: 8, created_at: "2018-02-14 15:01:33")


