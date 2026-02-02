function envoyer() {
  const langue = document.getElementById("langue").value;
  const faculte = document.getElementById("faculte").value;
  const question = document.getElementById("question").value.toLowerCase();

  let reponse = "";

  // ===== DROIT =====
  if (faculte === "DROIT") {
    if (question.includes("constitution")) {
      reponse = {
        "Français": "La constitution est la loi fondamentale d’un État. Elle définit l’organisation des pouvoirs publics, les droits et libertés des citoyens, ainsi que les principes fondamentaux de l’État.",
        "English": "The constitution is the fundamental law of a state. It defines public powers, citizens' rights and freedoms, and the basic principles of the state.",
        "Kirundi": "Itegeko nshinga ni ryo tegeko nyamukuru ry’igihugu. Rigena ubutegetsi, uburenganzira bw’abanyagihugu n’imigenzo y’igihugu.",
        "Kiswahili": "Katiba ni sheria ya msingi ya nchi. Inaeleza mamlaka ya dola, haki za raia na misingi ya taifa."
      }[langue];
    } else {
      reponse = messageGeneral(langue, faculte);
    }
  }

  // ===== INFORMATIQUE =====
  else if (faculte === "INFORMATIQUE") {
    if (question.includes("algorithme")) {
      reponse = {
        "Français": "Un algorithme est une suite d’étapes logiques et ordonnées permettant de résoudre un problème ou d’accomplir une tâche précise en informatique.",
        "English": "An algorithm is a sequence of logical steps used to solve a problem or perform a specific task in computing.",
        "Kirundi": "Algorithme ni intambwe zikurikirana zikoreshwa mu gutorera umuti ikibazo mu ikoranabuhanga.",
        "Kiswahili": "Algorithimu ni hatua zinazofuatana zinazotumika kutatua tatizo katika kompyuta."
      }[langue];
    } else {
      reponse = messageGeneral(langue, faculte);
    }
  }

  // ===== MÉDECINE =====
  else if (faculte === "MÉDECINE") {
    if (question.includes("maladie")) {
      reponse = {
        "Français": "Une maladie est une altération de l’état de santé se manifestant par des symptômes et nécessitant une prise en charge médicale.",
        "English": "A disease is a disturbance of health characterized by symptoms and requiring medical care.",
        "Kirundi": "Indwara ni ihinduka ry’ubuzima ryerekana ibimenyetso bisaba kwitabwaho n’abaganga.",
        "Kiswahili": "Ugonjwa ni hali ya kiafya inayoonyesha dalili na huhitaji matibabu."
      }[langue];
    } else {
      reponse = messageGeneral(langue, faculte);
    }
  }

  // ===== AUTRES FACULTÉS =====
  else {
    reponse = messageGeneral(langue, faculte);
  }

  document.getElementById("reponse").innerText =
    "📘 CapitanoX – " + faculte + "\n\n" + reponse;
}

// ===== MESSAGE GÉNÉRAL (style professeur) =====
function messageGeneral(langue, faculte) {
  return {
    "Français": "Explique ta question avec plus de détails afin que CapitanoX puisse t’apporter une explication universitaire claire et complète dans la faculté de " + faculte + ".",
    "English": "Please explain your question in more detail so CapitanoX can provide a clear and complete academic explanation in the faculty of " + faculte + ".",
    "Kirundi": "Sobanura neza ikibazo cawe kugira CapitanoX igufashe n’insiguro irambuye ijanye n’igisata ca " + faculte + ".",
    "Kiswahili": "Tafadhali eleza swali lako kwa undani ili CapitanoX ikupe maelezo ya kitaaluma katika kitivo cha " + faculte + "."
  }[langue];
}
