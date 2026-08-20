/* Shared progress helper.
   Each topic tracks 5 steps: explain, activity0 (drag&drop), activity1 (fill blank),
   activity2 (matching), activity3 (quiz). Stored in localStorage so progress
   persists as the learner moves between separate subtopic pages. */

function getProgress(topicId){
  try{
    return JSON.parse(localStorage.getItem('progress:'+topicId)) ||
      {explain:false, activity0:false, activity1:false, activity2:false, activity3:false};
  }catch(e){
    return {explain:false, activity0:false, activity1:false, activity2:false, activity3:false};
  }
}

function setStepDone(topicId, step, done){
  const p = getProgress(topicId);
  p[step] = done;
  localStorage.setItem('progress:'+topicId, JSON.stringify(p));
  return p;
}

function showToast(msg){
  let t = document.getElementById('toast');
  if(!t){
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=> t.classList.remove('show'), 2400);
}
