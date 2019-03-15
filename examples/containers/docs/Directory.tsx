import * as React from "react";
import { cpConfig } from "../../until/pageList";
import { Button } from "@component/index";
import { Link } from "react-router-dom";

const Directory: React.SFC = () => {
  return (
    <div>
      {cpConfig.component.map(key => (
        <div key={key}>
          <br />
          <Link to={`/docs/${key}`}>
            <Button radius={false} ghost={true}>
              {key}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Directory;
