'use client'

import React, { MouseEventHandler, useState } from "react";

export default function Btn({
  title,
  handler,
}: {
  title: React.ReactNode
  handler: MouseEventHandler
}) {
  return (
    <button onClick={handler}>{title}</button>
  );
}