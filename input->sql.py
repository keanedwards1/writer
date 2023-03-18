import psycopg2

conn = psycopg2.connect(
    database="your_database_name",
    user="your_username",
    password="your_password",
    host="your_host"
)

cursor = conn.cursor()

cursor.execute("INSERT INTO poems (poem_text, author_name) VALUES (%s, %s)", ("The Road Not Taken", "Robert Frost"))

conn.commit()

cursor.close()
conn.close()


