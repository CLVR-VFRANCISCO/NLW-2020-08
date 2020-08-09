module.exports = async function(db, { proffyValue, classValue, classScheduleValues }) {
       
    const insertedProffy = await db.run(`        
        INSERT INTO proffy_tb ( name, 
                                avatar, 
                                whatsapp, 
                                bio) 
                    VALUES (    "${proffyValue.name}",
                                "${proffyValue.avatar}",
                                "${proffyValue.whatsapp}",
                                "${proffyValue.bio}");
    `)
    
    const proffy_id = insertedProffy.lastID

    const insertedClass = await db.run(`
        INSERT INTO class_tb (  proffy_id, 
                                subject, 
                                cost) 
                    VALUES (    "${proffy_id}",
                                "${classValue.subject}",
                                "${classValue.cost}");
        `)

    const class_id = insertedClass.lastID
    
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
        INSERT INTO class_schedule_tb ( class_id,
                                        weekday,
                                        time_from,
                                        time_to) 
                            VALUES (    "${class_id}",
                                        "${classScheduleValue.weekday}",
                                        "${classScheduleValue.time_from}",
                                        "${classScheduleValue.time_to}");
        `)
    })
    
    await Promise.all(insertedAllClassScheduleValues)
}