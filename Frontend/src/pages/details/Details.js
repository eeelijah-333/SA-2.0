import './Details.css';
import { Link } from "react-router-dom";
import React from 'react';

class Details extends React.Component {
    render() {
        return (
            <div className="detailes-view">
                <header className="clearfix">
                    <Link className="btn btn-link btn-sm float-left" to="/">  &#x2190; Back</Link>
                    <button type="button" class="btn btn-primary btn-sm float-right">+ Add</button>
                    <button type="button" class="btn btn-danger btn-sm float-right">- Remove</button>
                </header>
                <hr />
                <main>
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <th>Open</th>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <th>Jacob</th>
                                <td>Thornton</td>
                            </tr>
                        </tbody>
                    </table>
                </main>
            </div>
        );
    }
}

export default Details;
