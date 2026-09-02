# Belangrijk verschil

De solution heeft voor ieder pad een eindtoestand. `try` behandelt data en empty, `catch` toont een fout en `finally` zet de interne loading-flag altijd terug. De flag voorkomt overlappende requests.
