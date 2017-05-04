//  Generally comparison operators follow this syntax:
// { <field1>: { <operator1>: <value1> } }

// 1. Find documents that have awards.
db.bios.find({awards:{$exists: true}});

// 2. Find documents that don't have awards.
db.bios.find({awards:{$exists: false}});

// 3. Find documents that have contribs for OOP or UNIX.
db.bios.find({$or: [ {contribs:"OOP"}, {contribs:"UNIX"} ] } );

// 4. Find documents with "Turing Award" awards.
db.bios.find({"awards.award":"Turing Award"});

// 5. Find documents with IDs between 3 and 7.

// 6. Find documents with awards that were awarded before the year 2000.

// 7. Find documents with birth dates, but no death dates.
