---
title: "Tell me where it hurts"
description: "How to explain being an SRE"
pubDate: "2025-09-13"
slug: "Tell me where it hurts"
---

# Tell Me Where It Hurts: The SRE as a Doctor of Systems

One of my favorite books is *Tell Me Where It Hurts* by Dr. Nick Trout, a veterinarian who shares what it’s like to treat patients that can’t speak for themselves. Animals can’t describe their symptoms — so vets learn to read subtle clues, trust their instincts, and piece together the story of what’s wrong.  

I read it some time ago, but it came back to the front of my mind while debugging a memory leak. Being a Site Reliability Engineer (SRE) is a lot like being a veterinarian. My “patients” — the systems and applications I care for — don’t talk either. They don’t say, “I’m feeling slow today” or “my database hurts.” Instead, they show symptoms: rising error rates, latency spikes, memory leaks, or sudden crashes. It’s my job to interpret those signals, diagnose the cause, and restore health.  

## The Family Doctor  
Most days, I’m like a family doctor checking up on healthy patients. I’m monitoring golden signals: latency, uptime, and resource use. I look for security issues, open incidents, and early warning signs. Just like a doctor looks at diet and lifestyle, I review scaling strategies, redundancy, and data consumption patterns.  

My service level indicators (SLIs) are the equivalent of “I’m not sleeping well” or “I’ve been gaining weight.” They aren’t emergencies — but they tell me whether the system is thriving or drifting toward trouble.  

## The Pediatrician  
When I’m reviewing a brand-new system design, I take on the role of a pediatrician. Newborn apps need special attention. Are they built to scale? Will they develop well as they grow? Can we catch issues early before they become chronic?  

Applications rarely get healthier with age — usually they accumulate technical debt, like humans collect bad habits. Sometimes the only cure is a rewrite, the software equivalent of a major surgery.  

## The ER Doctor  
And then there are the days when I’m an emergency room doctor. A system is bleeding out — maybe a memory leak is crashing pods every 30 seconds, or a runaway process is driving CPU usage to 100%.  

In those moments, I don’t have the luxury of slow diagnosis. I have to stop the bleeding first — spin up extra capacity, restart failing services, reroute traffic. Once the patient is stable, I can go back and look for root causes.  

## Why This Analogy Works  
This comparison helps me explain what I do to people outside tech. SRE isn’t just about fixing broken servers. It’s about prevention, care, and emergency response. It’s about watching for the quiet clues before they turn into loud alarms.  

And above all, it’s about responsibility: knowing that these systems are relied on, and their health matters.  
