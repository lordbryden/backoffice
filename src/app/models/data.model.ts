
export class Subsection{
  constructor(
   public name: String
  ){}
}

export class Video{
    constructor(
    public title: String,
    public subsection: String,
    public subject: String,
    public Class: String,
    public topic: String,
    public subtopic: String,
    public videourl: String,
    public pictureurl: String,
    public description: String
    ){}
}

export class Class{
   constructor(
    public name: String
   ){}
}


export class Product{
  constructor(
   public name: String
  ){}
}